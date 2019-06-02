import Header from "./Header";

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: "1px solid green"
};

const HighLayout = (Page) => {
    return( ()=> (
            <div style={layoutStyle}>
                <Header/>
                <Page/>
            </div>
            )
    );
}

export default HighLayout;