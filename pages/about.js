import Link from "next/link";
import HighLayout from "../components/HighLayout";

function About(){
    return(
        <div>
            <p>This is about page</p>
            <Link href="/index">
                <button>Go to index</button>
            </Link>
        </div>
    );
}

export default HighLayout(About);