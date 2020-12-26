
export class NoteFilter extends React.Component {

  state = {
    filterBy: {
      title: ''
    }
  };

  handleChange = (ev) => {
    const callback = () => {
      this.props.setFilter(this.state.filterBy);
    };

    const filterBy = { ...this.state.filterBy }
    filterBy.title = ev.target.value;

    this.setState({ filterBy }, callback);
  };

  render() {
    return <section className="note-filter">
      <label htmlFor="title">Filter: </label>
      <input type="text" name="title"
        value={this.state.filterBy.title}
        placeholder="Filter by name"
        autoComplete="off"
        onChange={this.handleChange} />
    </section>;
  }

}