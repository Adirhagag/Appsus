

export function NoteImg({ info, isPinned, style }) {
  console.log(info.url);
  console.log(info.title);
  console.log(isPinned);
  console.log(style.backgroundColor);

    return (
      <article className="note-img">
        <h1>rendereing</h1>
        <img src={info.url} alt=""/>
      </article>
    )
}
