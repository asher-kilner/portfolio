import React, {Component} from 'react'
import { HashLink as Link } from "react-router-hash-link";

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav
                    className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg">
                    <div className="flex w-full flex-wrap items-center justify-between px-3">
                        <ul className="mr-auto flex flex-col lg:flex-row">
                            <li className="mb-4 lg:mb-0 lg:pr-2">
                                <Link to='#about' smooth>About</Link>
                            </li>
                            <li className="mb-4 lg:mb-0 lg:pr-2">
                                <Link to='#projects' smooth>Projects</Link>
                            </li>
                            <li className="mb-4 lg:mb-0 lg:pr-2">
                                <Link to='#timeline' smooth>Timeline</Link>
                            </li>
                            <li className="mb-4 lg:mb-0 lg:pr-2">
                                <Link to='#contact' smooth>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}