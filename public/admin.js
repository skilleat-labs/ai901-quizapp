import {$,esc,api,toast,shell,bindErrors,download,csv} from './common.js';
bindErrors();let course=new URL(location.href).searchParams.get('course')??'ai901',data=null,view='overview';
const analysisFilter={set:'',session:'',sort:'rate',limit:'10',minimum:1,wrongOnly:true};
async function login(){
 $('#app').innerHTML=`<main class="admin-entry"><a href="/" class="brand"><span class="brand-icon">A</span> AI-901 클래스룸</a><form id="login" class="entry-box"><p class="eyebrow">TEACHER STUDIO</p><h1>수업의 다음 단계를 열어요.</h1><p class="muted">강사 화면은 별도 암호로 보호됩니다.</p><label for="password">강사 암호</label><input type="password" id="password" autocomplete="current-password" required><button class="button wide">강사 스튜디오 입장 →</button><p class="error" id="login-error" role="alert"></p><a href="/" class="muted">학생 화면으로 돌아가기</a></form></main>`;
 $('#login').onsubmit=async e=>{e.preventDefault();try{await api('/admin/login',{password:$('#password').value});await dashboard();}catch(err){$('#login-error').textContent=err.message;}};
}
async function dashboard(){
 try{data=await api('/admin/dashboard?course='+encodeURIComponent(course));}catch(e){if(e.status===401)return login();throw e;}
 const submitted=data.attempts.filter(a=>a.submittedAt!==null&&!a.practice),current=data.attempts.filter(a=>a.submittedAt===null),average=data.results.length?Math.round(data.results.reduce((s,a)=>s+a.result.percent,0)/data.results.length):0;
 $('#app').innerHTML=shell(`<div class="page-heading"><div><p class="eyebrow">TEACHER STUDIO</p><h1>이해의 흐름을 살펴보세요.</h1><p class="muted">평가를 열고, 학생의 막히는 지점을 다음 설명으로 연결하세요.</p></div><button class="button secondary" id="refresh">새로고침 ↻</button></div><section class="toolbar"><label>현재 수업 <select id="course">${data.courses.map(c=>`<option value="${esc(c.id)}" ${course===c.id?'selected':''}>${esc(c.name)}</option>`).join('')}</select></label><button class="button secondary" id="copy-link">학생 입장 링크 복사</button><button class="button secondary" id="new-course">새 기수 만들기</button></section><section class="metrics"><div><span>입장한 학생</span><strong>${data.students.length}<small> 명</small></strong><p>이름 입력으로 참여</p></div><div><span>공식 제출</span><strong>${submitted.length}<small> 회</small></strong><p>${current.length}회 응시 중</p></div><div><span>평균 정답률</span><strong>${average}<small>%</small></strong><p>복습 응시 제외</p></div></section><div class="tabs"><button class="tab ${view==='overview'?'active':''}" data-view="overview">평가 운영</button><button class="tab ${view==='analysis'?'active':''}" data-view="analysis">오답 분석</button><button class="tab ${view==='results'?'active':''}" data-view="results">학생별 기록</button><button class="tab ${view==='bank'?'active':''}" data-view="bank">문제은행</button></div><section id="admin-content"></section><dialog id="course-dialog"><h2>새 수업 만들기</h2><form id="course-form"><label for="course-id">기수 ID (영문 소문자·숫자·하이픈)</label><input id="course-id" required minlength="2" maxlength="40" pattern="[a-z0-9-]+" placeholder="예: gunsan-2026-11"><label for="course-name">수업 이름</label><input id="course-name" required maxlength="80" placeholder="예: 군산대 11월 AI-901"><div class="dialog-actions"><button type="button" id="cancel-course" class="button secondary">취소</button><button class="button">만들기</button></div></form></dialog>`,{admin:true});
 $('#course').onchange=e=>{course=e.target.value;dashboard();};$('#refresh').onclick=dashboard;$('#logout').onclick=async()=>{await api('/admin/logout',{});login();};
 $('#copy-link').onclick=async()=>{await navigator.clipboard.writeText(location.origin+'/?course='+encodeURIComponent(course));toast('입장 링크를 복사했습니다.');};
 $('#new-course').onclick=()=>$('#course-dialog').showModal();$('#cancel-course').onclick=()=>$('#course-dialog').close();$('#course-form').onsubmit=async e=>{e.preventDefault();const x=await api('/admin/course',{id:$('#course-id').value,name:$('#course-name').value});course=x.id;dashboard();};
 document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>{view=b.dataset.view;dashboard();});await renderView();
}
async function renderView(){
 const target=$('#admin-content');
 if(view==='overview'){
 target.innerHTML=`<div class="section-heading"><h2>수업 순서대로 평가 열기</h2><span>새로 열면 별도 평가 회차가 만들어집니다</span></div><div class="admin-sets">${data.sets.map(s=>`<article class="admin-set"><span class="eyebrow">${s.id} · ${s.count}문항</span><h3>${esc(s.title)}</h3><p class="muted">${s.minutes}분 · ${s.kind==='mock'?'전 범위':'DAY '+s.day}</p><button class="button secondary" data-open="${s.id}">이 평가 열기 →</button></article>`).join('')}</div><div class="section-heading"><h2>열린 평가와 지난 평가</h2><span>시간 종료 시 마지막 저장 답안으로 확정</span></div><div class="session-list">${data.sessions.slice().reverse().map(s=>{const a=data.attempts.filter(a=>a.sessionId===s.id&&!a.practice);return `<article class="session-card"><div><span class="status ${s.status==='open'?'open':''}">${s.status==='open'?'진행 가능':'마감'}</span><h3>${esc(data.sets.find(x=>x.id===s.setId)?.title)}</h3><p>${s.minutes}분 · ${a.filter(a=>a.submittedAt!==null).length}/${a.length} 제출 · ${s.reveal==='immediate'?'제출 즉시 해설':'마감 후 해설'}</p></div><div class="card-actions"><button class="button secondary" data-toggle="${s.id}">${s.status==='open'?'마감하기':'다시 열기'}</button><button class="link-button" data-reveal="${s.id}">해설 ${s.reveal==='immediate'?'마감 후로':'즉시 공개로'}</button></div></article>`;}).join('')||'<div class="empty">아직 평가를 열지 않았습니다. 첫 수업 뒤 D1-A를 열어 주세요.</div>'}</div><dialog id="open-dialog"><h2 id="open-title">평가 열기</h2><form id="open-form"><label for="minutes">학생별 제한 시간 (분)</label><input id="minutes" type="number" min="1" max="180" required><label for="reveal">해설 공개</label><select id="reveal"><option value="immediate">학생이 제출하면 바로 공개</option><option value="closed">강사가 평가를 마감하면 공개</option></select><p class="field-note">자체 제작 문제·보기는 학생별로 섞입니다. 4회차는 원문 모듈 순서를 유지하고 한국어 보기는 학생별로 섞습니다.<br>마감하면 진행 중 공식 응시는 저장 답안으로 확정됩니다.</p><div class="dialog-actions"><button type="button" class="button secondary" id="cancel-open">취소</button><button class="button">평가 열기</button></div></form></dialog>`;
 document.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>{const set=data.sets.find(s=>s.id===b.dataset.open);$('#open-title').textContent=set.title;$('#minutes').value=set.minutes;$('#open-dialog').showModal();$('#open-form').onsubmit=async e=>{e.preventDefault();await api('/admin/open',{course,setId:set.id,minutes:Number($('#minutes').value),reveal:$('#reveal').value});toast('평가를 열었습니다. 학생 화면에 표시됩니다.');dashboard();};});
 $('#cancel-open').onclick=()=>$('#open-dialog').close();
 document.querySelectorAll('[data-toggle]').forEach(b=>b.onclick=async()=>{const s=data.sessions.find(s=>s.id===b.dataset.toggle);if(s.status==='open'&&!confirm('평가를 마감할까요? 진행 중인 공식 답안은 마지막 저장본으로 확정됩니다.'))return;await api('/admin/session',{course,id:s.id,status:s.status==='open'?'closed':'open'});dashboard();});
 document.querySelectorAll('[data-reveal]').forEach(b=>b.onclick=async()=>{const s=data.sessions.find(s=>s.id===b.dataset.reveal);await api('/admin/session',{course,id:s.id,reveal:s.reveal==='immediate'?'closed':'immediate'});dashboard();});
 }
 if(view==='analysis')renderAnalysis();
 if(view==='results'){
 target.innerHTML=`<div class="section-heading"><h2>학생별 제출 기록</h2><button class="button secondary" id="csv">성적 CSV 다운로드 ↓</button></div><div class="table-wrap"><table><thead><tr><th>이름</th><th>평가</th><th>정답/유효문항</th><th>정답률</th><th>구분</th></tr></thead><tbody>${data.results.map(a=>`<tr><td>${esc(a.name)}</td><td>${a.setId}</td><td>${a.result.correct}/${a.result.total}</td><td>${a.result.percent}%</td><td>공식 최초</td></tr>`).join('')||'<tr><td colspan="5">제출 기록이 없습니다.</td></tr>'}</tbody></table></div><p class="field-note">모든 복습 응시도 서버에 보관됩니다. 공식 제출 통계에는 포함하지 않습니다.<br>학생은 입력 이름으로만 구분하므로 동일 이름 재입장은 본인 인증이 아닙니다.</p>`;
 $('#csv').onclick=()=>download(course+'-results.csv',csv([['이름','평가','회차ID','정답','유효문항','정답률','제출일'],...data.results.map(a=>[a.name,a.setId,a.sessionId,a.result.correct,a.result.total,a.result.percent,new Date(a.submittedAt).toISOString()])]));
 }
 if(view==='bank'){
 target.innerHTML=`<div class="section-heading"><h2>문제은행 검토</h2><button class="button secondary" id="export-bank">문제은행 JSON 내려받기 ↓</button></div><p class="muted">자체 제작 240문항 + Microsoft Learn 공식 원문 연결 43개. 4회차는 공식 문항의 학습 요지를 한국어로 재서술하고 보기를 자체 구성한 평가이며, 공식 번역본이 아닙니다. 기존 응시에는 문항 스냅샷이 보존됩니다.</p><div class="upload-box"><label for="bank-file">수정한 문제은행 JSON 가져오기</label><input id="bank-file" type="file" accept="application/json,.json"><button class="button" id="import-bank">검증 후 적용</button><p class="field-note">기존 ID와 세트 구성을 유지하세요. 질문·보기·해설을 수정할 수 있습니다. 공개 여부와 근거를 확인한 뒤 적용해 주세요.</p></div><div id="bank-list"></div>`;
 const b=await api('/admin/questions');$('#export-bank').onclick=()=>download('ai901-questions.json',JSON.stringify(b.bank,null,2),'application/json');
 $('#import-bank').onclick=async()=>{const f=$('#bank-file').files[0];if(!f)return toast('JSON 파일을 선택하세요.');if(f.size>900000)return toast('900KB 이하 파일을 사용하세요.');const bank=JSON.parse(await f.text());await api('/admin/import',{bank});toast('문제은행을 검증하고 적용했습니다.');renderView();};
 $('#bank-list').innerHTML=b.bank.map(q=>`<details class="review"><summary><span class="pill">${q.id}</span><span>${esc(q.prompt)}</span></summary><div class="review-body"><p>${esc(q.explanation)}</p>${q.options.map(o=>`<p><b>${q.correct.includes(o.id)?'✓':''} ${esc(o.text)}</b> — ${esc(o.reason)}</p>`).join('')}<a href="${esc(q.source)}" target="_blank" rel="noopener">근거 문서 ↗</a></div></details>`).join('');
 }
}
dashboard();

function renderAnalysis(){
 const f=analysisFilter,target=$('#admin-content');
 const sessions=data.sessions.filter(s=>!f.set||s.setId===f.set);
 if(f.session&&!sessions.some(s=>s.id===f.session))f.session='';
 const label=s=>`${s.setId} · ${new Date(s.createdAt).toLocaleString('ko-KR')} · ${s.status==='open'?'진행 중':'마감'}`;
 let rows=data.stats.filter(s=>(!f.set||s.setId===f.set)&&(!f.session||s.sessionId===f.session)&&s.total>=f.minimum&&(!f.wrongOnly||s.wrong>0));
 rows.sort((a,b)=>f.sort==='count'?b.wrong-a.wrong||b.wrong/b.total-a.wrong/a.total:b.wrong/b.total-a.wrong/a.total||b.wrong-a.wrong);
 const matched=rows.length;rows=rows.slice(0,f.limit==='all'?undefined:Number(f.limit));
 target.innerHTML=`<div class="section-heading"><h2>많이 틀린 문제로 다시 설명하기</h2><span>${matched}개 중 ${rows.length}개 표시</span></div>
 <div class="toolbar analysis-filters">
 <label>평가 세트<select id="analysis-set"><option value="">전체 세트</option>${data.sets.map(s=>`<option value="${esc(s.id)}" ${f.set===s.id?'selected':''}>${esc(s.id)} · ${esc(s.title)}</option>`).join('')}</select></label>
 <label>평가 회차<select id="analysis-session"><option value="">전체 회차</option>${sessions.map(s=>`<option value="${esc(s.id)}" ${f.session===s.id?'selected':''}>${esc(label(s))}</option>`).join('')}</select></label>
 <label>정렬<select id="analysis-sort"><option value="rate" ${f.sort==='rate'?'selected':''}>오답률 높은 순</option><option value="count" ${f.sort==='count'?'selected':''}>오답 인원 많은 순</option></select></label>
 <label>표시 개수<select id="analysis-limit">${['10','20','all'].map(v=>`<option value="${v}" ${f.limit===v?'selected':''}>${v==='all'?'전체':v+'문항'}</option>`).join('')}</select></label>
 <label>최소 제출 수<input id="analysis-min" type="number" min="1" value="${f.minimum}"></label>
 <label class="filter-check"><input id="analysis-wrong" type="checkbox" ${f.wrongOnly?'checked':''}>오답 있는 문제만</label></div>
 <p class="field-note">제출 완료한 공식 응시 기준 · 복습과 무효 문항 제외 · 미응답은 오답에 포함됩니다.<br>여러 회차를 선택하면 같은 학생이 회차별로 집계될 수 있습니다. 문제는 회차·문항 버전별로 분리합니다. 복수 선택의 보기별 비율 합은 100%를 넘을 수 있습니다.</p>
 <div class="analysis-list">${rows.map((s,i)=>{
 const session=data.sessions.find(x=>x.id===s.sessionId),rate=Math.round(s.wrong/s.total*100);
 const distractors=s.choices.filter(o=>!s.correct.includes(o.id)).sort((a,b)=>(s.options[b.id]??0)-(s.options[a.id]??0));const top=distractors[0],topCount=top?(s.options[top.id]??0):0;const topChoices=distractors.filter(o=>topCount>0&&(s.options[o.id]??0)===topCount);
 return `<details class="review analysis-review"><summary><span class="analysis-rank">${i+1}</span><span class="analysis-summary"><span class="eyebrow">${esc(s.setId)} · ${esc(s.questionId)} · ${esc(s.topic)}</span><span class="analysis-prompt">${esc(s.prompt)}</span><span class="muted small">${s.total}명 제출 · ${s.wrong}명 오답 · ${s.unanswered}명 미응답 · ${esc(session?label(session):'')}</span></span><strong class="analysis-rate">${rate}%<small> 오답</small></strong></summary>
 <div class="review-body"><p class="pill">${s.type==='multiple'?'복수 선택 · 정답을 모두 고르시오.':'단일 선택'}</p>${s.code?`<pre><code>${esc(s.code)}</code></pre>`:''}
 ${topChoices.length?`<p class="analysis-callout"><b>가장 많이 고른 오답 보기${topChoices.length>1?' (공동)':''}</b><br>${topChoices.map(o=>esc(o.text)+' · '+topCount+'명 선택').join('<br>')}</p>`:''}
 ${s.choices.map((o,j)=>{const correct=s.correct.includes(o.id),count=s.options[o.id]??0;return `<div class="review-option ${correct?'correct-option':''}"><span>${correct?'✓':String.fromCharCode(65+j)}</span><div><b>${esc(o.text)}</b> ${correct?'<span class="pill">정답</span>':''}<p class="analysis-choice-count">${count}명 선택 · ${Math.round(count/s.total*100)}%</p><p>${esc(o.reason)}</p></div></div>`;}).join('')}
 <p class="explain"><b>재설명 핵심</b> ${esc(s.explanation)}</p><p class="muted small">선택지 표시는 관리자 기준입니다. 학생별 화면의 보기 순서와 다를 수 있습니다.</p>
 <a href="${esc(s.source)}" target="_blank" rel="noopener noreferrer">공식 개념 확인 ↗</a>
 <details class="analysis-advanced"><summary>채점 관리</summary><p class="field-note">문항에 오류가 확인된 경우에만 사용하세요. 선택 회차에서 이 문항을 제외하면 기존 점수와 순위가 다시 계산됩니다.</p><button class="link-button" data-void="${esc(s.questionId)}" data-session="${esc(s.sessionId)}">이 회차에서 문항 무효 처리</button></details>
 </div></details>`;
 }).join('')||'<div class="empty">조건에 맞는 제출 완료 오답이 없습니다. 세트·회차·최소 제출 수를 확인하세요.</div>'}</div>`;
 for(const key of ['set','session','sort','limit'])$('#analysis-'+key).onchange=e=>{f[key]=e.target.value;if(key==='set')f.session='';renderAnalysis();};
 $('#analysis-min').onchange=e=>{f.minimum=Math.max(1,Math.floor(Number(e.target.value)||1));renderAnalysis();};
 $('#analysis-wrong').onchange=e=>{f.wrongOnly=e.target.checked;renderAnalysis();};
 document.querySelectorAll('[data-void]').forEach(b=>b.onclick=async()=>{if(!confirm('이 평가 회차에서 해당 문항을 채점 제외할까요? 점수와 순위가 다시 계산됩니다.'))return;const s=data.sessions.find(s=>s.id===b.dataset.session);await api('/admin/session',{course,id:s.id,voided:[...s.voided,b.dataset.void]});toast('채점에서 제외했습니다.');dashboard();});
}
