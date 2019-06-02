import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../components/MyLayout";
import PostLink from "../components/PostLink";
import Markdown from 'react-markdown';


const Index = (props) =>(
    <Layout>
        <p>Hello NextJs</p>
        <div className="markdown">
        <Markdown
        source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
     `}
      />
        </div>

        <Link href="/about">
            <a title="About page">link to about page</a>
        </Link>

        <br/>
        <ul>
            <PostLink id="hello-nextjs" title="Hello NextJs"/>
            <PostLink id="learn-nextjs" title="Learn NextJs" />
            <PostLink id="deploy-apps-with-nextjs" title="Deploy apps with NextJs"/>
        </ul>

        <br/>

        <ul>
            {
                props.shows.map(item => (
                    <li key={item.id}>
                        <Link href={`/post?title=${item.name}&id=${item.id}`} as={`/p/${item.id}/title/${item.name}`}>
                            <a>{item.name}</a>
                        </Link>
                    </li>
                ))
            }
        </ul>

        <style jsx>{`
        h1,
        a {
            font-family: 'Arial';
        }

        ul{
            padding: 0;
        }

        li {
            list-style: none;
            margin: 5px 0;
        }

        a {
            text-decoration: none;
            color: blue;
        }

        a:hover{
            opacity : 0.6
        }

        .markdown {
        font-family: 'Arial';
        }

      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}
    </style>

    </Layout>
)

Index.getInitialProps = async function(){

    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await  res.json();

    console.log(`show data lenght ${data.length}`);

    return {
        shows : data.map( data => data.show)
    }
}

export default Index;