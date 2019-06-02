import Link from "next/link";

const styles = {
    linkStyle: {
        marginRight: 15
    }
};

const Header = () => (

    <div>
        <Link href="/index" >
            <a style={styles.linkStyle} title="index">Index</a>
        </Link>
        <Link href="/about">
            <a style={styles.linkStyle} title="about">About</a>
        </Link>
        <Link href="/contact">
            <a style={styles.linkStyle} title="about">Contact</a>
        </Link>
    </div>
);

export default Header;