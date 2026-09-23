'use client'
import Link from "next/link";
import { use } from "react";
import { UserContext } from "../contexts/UserContext";

const BookCard = ({ book }) => {

    const user = use(UserContext);

    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">

                <h2 className="card-title">{book.title}</h2>

                <p>{book.description}</p>

                <div className="card-actions justify-end">
                    <Link href={`/books/${book.id}`} >
                        <button className="btn btn-primary">Show Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;