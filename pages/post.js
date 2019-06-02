import {withRouter} from "next/router";
import Layout from "../components/MyLayout";


const ContentRouter = withRouter(props => (
    <div>
      <h1>{props.router.query.title}</h1>
      <p>without router.</p>
    </div>
));

const Content = props => (
    <div>
      <h1>{props.router.query.title}</h1>
      <p>This is the blog post content.</p>
    </div>
);

const Post = withRouter( (props) => {
    return (
        <Layout>
            <h1>{props.router.query.title}</h1>
            <h1>{props.router.query.id}</h1>
            <p> This is a blog post</p>
            <ContentRouter/>

            <br/>
            <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>

            <br/>
            <img src={props.show.image.medium} style={{width: 100, height: 'auto'}}/>
        </Layout>
    );
}
);

Post.getInitialProps = async function(context){
    let show = {};
    const {id} = context.query;
    if(id){
        const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
        show = await res.json();
        
        console.log(`Fetched show: ${show.name}`);
    }

    return{
        show
    }
}

export default Post;