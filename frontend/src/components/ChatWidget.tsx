/**
 * Temporary iframe-based embed. Replace src with your Web Chat / Direct Line Speech URL.
 */
export function ChatWidget() {
  const botUrl = import.meta.env.VITE_BOT_IFRAME_URL || 'https://webchat.botframework.com/embed/YOUR_BOT_ID?s=YOUR_SECRET';
  return (
    <div className="bg-white shadow-2xl rounded-2xl p-4 max-w-xl mx-auto">
      <iframe
        title="AI Finance Coach"
        src={botUrl}
        className="w-full h-[500px] border-none"
      />
    </div>
  );
}
