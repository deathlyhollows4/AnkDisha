export const focuses = ['Career & growth', 'Relationships', 'A new beginning'];
export const plans = [
  [
    { title: 'Make space for your next move.', action: 'Write down what a fulfilling next role would look like. Choose three things you are unwilling to compromise on.', reflection: 'What am I moving towards, rather than simply moving away from?', tag: 'Reflect', day: 8 },
    { title: 'Let preparation become progress.', action: 'Refresh one project in your portfolio. Ask someone you trust for specific, practical feedback.', reflection: 'What is one piece of evidence that shows what I can do?', tag: 'Prepare', day: 15 },
    { title: 'Start one useful conversation.', action: 'Reach out to a mentor or someone working in a role you admire. Bring two thoughtful questions.', reflection: 'What could I learn before I decide?', tag: 'Connect', day: 22 },
    { title: 'Choose a small next step.', action: 'Review what you learned this month. Choose one application, conversation, or skill to focus on next.', reflection: 'Which next step feels both realistic and meaningful?', tag: 'Review', day: 29 },
  ],
  [
    { title: 'Begin by listening to yourself.', action: 'Name one need you have not expressed clearly. Write it down without assigning blame.', reflection: 'What would I like someone to understand about me?', tag: 'Reflect', day: 8 },
    { title: 'Make room for a real conversation.', action: 'Set aside an unhurried moment to talk. Ask an open question and listen without planning your reply.', reflection: 'What have I assumed instead of asking?', tag: 'Connect', day: 15 },
    { title: 'Bring care into the everyday.', action: 'Choose a small shared ritual: a walk, a meal, or a weekly check-in. Keep the commitment simple.', reflection: 'What helps us feel present with each other?', tag: 'Nurture', day: 22 },
    { title: 'Notice what has changed.', action: 'Reflect on your conversations. Keep what feels supportive and name one boundary you want to protect.', reflection: 'Where do I feel more understood?', tag: 'Review', day: 29 },
  ],
  [
    { title: 'Give your idea a clear shape.', action: 'Describe what you want to begin in one sentence. Identify the person or problem it would serve.', reflection: 'Why does this beginning matter to me?', tag: 'Reflect', day: 8 },
    { title: 'Make the first version small.', action: 'Choose the simplest version you can try. List the time, resources, and support it actually needs.', reflection: 'What could I learn without committing everything?', tag: 'Prepare', day: 15 },
    { title: 'Let your idea meet the world.', action: 'Share a small version with one person who can offer honest feedback. Listen for practical questions.', reflection: 'What surprised me in their response?', tag: 'Explore', day: 22 },
    { title: 'Decide what deserves another step.', action: 'Compare your original idea with what you learned. Decide what to continue, change, or put on hold.', reflection: 'What does the evidence suggest I try next?', tag: 'Review', day: 29 },
  ],
];
export function reduceNumber(value: string) {
  const stages: string[] = []; let number = value.split('').reduce((sum, n) => sum + Number(n), 0);
  stages.push(value.split('').map(Number).join(' + ') + ' = ' + number);
  while (number > 9) { const digits = String(number).split(''); const next = digits.reduce((sum, n) => sum + Number(n), 0); stages.push(digits.join(' + ') + ' = ' + next); number = next; }
  return { number, calculation: stages.join(' → ') };
}
export const themes: Record<number, {title: string; prompt: string}> = {
  1: {title:'initiative',prompt:'What small step could you take without waiting for permission?'},
  2: {title:'connection',prompt:'Who could bring a helpful perspective to your next decision?'},
  3: {title:'expression',prompt:'What idea would become clearer if you wrote it down or shared it?'},
  4: {title:'foundation',prompt:'Which simple routine would make your next month feel more grounded?'},
  5: {title:'exploration',prompt:'What low-risk experiment could help you learn something new?'},
  6: {title:'care',prompt:'How can you support someone while respecting your own capacity?'},
  7: {title:'reflection',prompt:'What would you notice if you gave yourself time to think?'},
  8: {title:'stewardship',prompt:'Where could you use your time and resources more intentionally?'},
  9: {title:'perspective',prompt:'What can you finish or release to make room for what matters?'},
};
export function calendarText(focus: number) {
  const escape = (text: string) => text.replace(/\\/g,'\\\\').replace(/;/g,'\\;').replace(/,/g,'\\,').replace(/\n/g,'\\n');
  const stamp = new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');
  const events = plans[focus].map((p,i)=>['BEGIN:VEVENT',`UID:ankdisha-sample-${focus}-${i}-202609@ankdisha.local`,`DTSTAMP:${stamp}`,`DTSTART;VALUE=DATE:202609${String(p.day).padStart(2,'0')}`,`DTEND;VALUE=DATE:202609${String(p.day+1).padStart(2,'0')}`,`SUMMARY:${escape('Sample planning: '+p.tag)}`,`DESCRIPTION:${escape(p.action+' '+p.reflection+' Illustrative example only. These are not personalized or auspicious dates.')}`,'END:VEVENT'].join('\r\n'));
  const lines = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//AnkDisha//Sample planning calendar//EN','CALSCALE:GREGORIAN',...events,'END:VCALENDAR'].join('\r\n').split('\r\n');
  return lines.map(line=>{let result='';let count=0;for(const ch of line){const n=new TextEncoder().encode(ch).length;if(count+n>73){result+='\r\n ';count=1;}result+=ch;count+=n;}return result;}).join('\r\n')+'\r\n';
}
export function downloadFile(content: string, name: string, type: string) {
  const url = URL.createObjectURL(new Blob([content], {type})); const a = document.createElement('a'); a.href=url; a.download=name; a.click(); setTimeout(()=>URL.revokeObjectURL(url),2000);
}
