import Link from "next/link";

const PostLink = (props) => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
            <a title={props.title}>{props.title}</a>
        </Link>
        <style jsx>{`
            li{
                list-style: none;
                margin: 5px 0;
            }
            a {
                color: green;
                text-decoration : none;
            }
        `}
        </style>
    </li>
);

export default PostLink;