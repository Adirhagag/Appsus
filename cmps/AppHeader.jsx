 const { NavLink } = ReactRouterDOM;



export class AppHeader extends React.Component {

    state = {
        isShowMenuHeader: true
    }
    onToggleMenuHeader = () => {
        this.setState({ isShowMenuHeader: !this.state.isShowMenuHeader }, () => console.log(this.state))

    }

    render() {

        return (
            <header className="main-header">

                <h1 className="logo"><img src="../assets/img/appsus.png" />Appsus</h1>
                <button className="memu-header" onClick={this.onToggleMenuHeader} ><i className="fa fa-th-large"></i></button>
                <ul className={`main-nav ${!this.state.isShowMenuHeader ? 'hide' : ''}`}>
                    <li><NavLink activeClassName="my-active" exact to="/"><i className="fas fa-home">Home</i></NavLink></li>
                    <li><NavLink exact to="/email"><i className="fas fa-envelope">Email</i></NavLink></li>
                    <li><NavLink exact to="/note"> <i className="fas fa-pager"></i>Note</NavLink></li>
                    <li><NavLink exact to="/book"> <i className="fa fa-book"></i>Books</NavLink></li>

                </ul>

            </header>
        )
    }

}
