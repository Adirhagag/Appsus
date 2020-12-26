

export function NoteVideo({ isClickable = true, activePreview, info, isPinned, style, id }) {
  // check the embed thing

  let isActivePreview = isClickable;

  function myFunction() {
    var str = info.url;
    var res = str.split("=");
    var embeddedUrl = "https://www.youtube.com/embed/" + res[1];
    return embeddedUrl;
  }

  return (
    <article onClick={() => isActivePreview ? activePreview(id) : () => false}
      className="note-video" style={{ backgroundColor: style.backgroundColor }}>
      <h1>{info.title}</h1>

      <div className="video-container">
        <iframe width="420" height="345" src={myFunction()}>
        </iframe>
      </div>
    </article>
  )
}
