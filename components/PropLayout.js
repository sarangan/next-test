import Header from "./Header";

const layoutStyle ={
    margin: 20,
    padding: 20,
    border: '1px solid red'
}
const PropLayout = (props) =>{
    return (
        <div style={layoutStyle}>
            <Header />
            {props.content}
        </div>
    );
}

export default PropLayout;