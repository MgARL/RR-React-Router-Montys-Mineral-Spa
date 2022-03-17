import { Link } from "react-router-dom"

export default function Packages({ packages }) {
    const displayPackages = packages.map((eachPackage, index) => <li><Link to={`/package/${index}`}>{eachPackage}</Link></li>)

    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                </div>
                <ul>
                    {displayPackages}
                </ul>
            </div>
        </div>
    )
}