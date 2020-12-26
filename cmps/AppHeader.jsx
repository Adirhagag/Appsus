const { NavLink, withRouter } = ReactRouterDOM;


function _AppHeader(props) {

    // function goToMuki() {
    //     props.history.push('/pet/i102');
    // }

    return <header className="main-header">

        <h1 className="logo">🌓 Apps Place</h1>

        <ul className="main-nav">
            <li><NavLink activeClassName="my-active" exact to="/"><i className="fas fa-home">Home</i></NavLink></li>
            <li><NavLink exact to="/email"><i className="fas fa-envelope">Email</i></NavLink></li>
            <li><NavLink exact to="/note"> <i className="fas fa-pager"></i>Note</NavLink></li>
            
        </ul>
        
    </header>;
}

//HOC - higher order component
export const AppHeader = withRouter(_AppHeader);

{/* <i class="fas fa-book-open"></i> */}