import Header from "./Header";

const layoutSyle = {
    margin: 20,
    padding: 20,
    border: "1px solid #333"
}

const Layout = (props) => (
    <div style={layoutSyle}>
        <Header/>
        {props.children}
    </div>
);
export default Layout;