import DOMPurify from 'dompurify';

/**
 * Appends a message to the chat list UI.
 * @param {string} role - The role of the speaker ('user' or 'model').
 * @param {string} text - The message text.
 */
export function appendMessage(role, text) {
  const list = document.getElementById('msg-list');
  if (!list) return;
  
  const isUser = role === 'user';
  const id = `ai-${Date.now()}`;

  const div = document.createElement('div');
  div.style.cssText = `display:flex;gap:10px;align-items:flex-start;margin-bottom:${isUser ? '16px' : '32px'};${isUser ? 'flex-direction:row-reverse;' : ''}`;

  if (isUser) {
    const escapeHTML = (str) =>
      str.replace(
        /[&<>'"]/g,
        (tag) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[tag]
      );
    div.innerHTML = `<div class="chat-bubble-user">${escapeHTML(text).replace(/\n/g, '<br>')}</div>`;
  } else {
    // Assuming marked is available globally or via window
    const rawHTML = window.marked ? window.marked.parse(text) : text.replace(/\n/g, '<br>');
    const parsedHTML = DOMPurify.sanitize(rawHTML);
    div.innerHTML = `
      <div style="width:32px;height:32px;background:rgba(245,158,11,0.12);border:1px solid rgba(245,158,11,0.2);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0;">🤖</div>
      <div class="chat-bubble-ai" id="${id}">
        ${parsedHTML}
        <div style="display:flex;gap:8px;margin-top:12px;border-top:1px solid rgba(0,0,0,0.05);padding-top:8px;">
          <button class="copy-btn" aria-label="Copy message" onclick="navigator.clipboard.writeText(this.parentElement.parentElement.innerText.replace(/Copy|Copied|Listen/g,'').trim()); this.innerHTML='<svg width=14 height=14 viewBox=\\'0 0 24 24\\' fill=none stroke=currentColor stroke-width=2><polyline points=\\'20 6 9 17 4 12\\'></polyline></svg> Copied'; setTimeout(() => this.innerHTML='<svg width=14 height=14 viewBox=\\'0 0 24 24\\' fill=none stroke=currentColor stroke-width=2><rect x=9 y=9 width=13 height=13 rx=2 ry=2></rect><path d=\\'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\\'></path></svg> Copy', 2000);" style="display:flex;align-items:center;gap:4px;font-size:12px;color:var(--color-muted);background:transparent;border:none;cursor:pointer;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy
          </button>
          <button class="listen-btn" aria-label="Listen to message" onclick="window.toggleSpeech(this, this.parentElement.parentElement.innerText)" style="display:flex;align-items:center;gap:4px;font-size:12px;color:var(--color-muted);background:transparent;border:none;cursor:pointer;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg> <span>Listen</span>
          </button>
        </div>
      </div>`;
  }
  list.appendChild(div);

  const container = document.getElementById('chat-messages');
  if (container) {
    container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
  }
}

/**
 * Shows the typing indicator in the chat UI.
 */
export function showTyping() {
  const list = document.getElementById('msg-list');
  if (!list) return;
  
  const div = document.createElement('div');
  div.id = 'typing-indicator';
  div.style.cssText = 'display:flex;gap:10px;align-items:center;margin-bottom:16px;';
  div.innerHTML = `
    <div style="width:32px;height:32px;background:rgba(245,158,11,0.12);border:1px solid rgba(245,158,11,0.2);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:15px;">🤖</div>
    <div style="display:flex;gap:4px;padding:12px 16px;background:var(--color-surface2);border:1px solid var(--color-border);border-radius:18px;">
      <div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>
    </div>`;
  list.appendChild(div);
  
  const container = document.getElementById('chat-messages');
  if (container) {
    container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
  }
}

/**
 * Hides the typing indicator from the chat UI.
 */
export function hideTyping() {
  document.getElementById('typing-indicator')?.remove();
}
