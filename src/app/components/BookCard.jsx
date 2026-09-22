import Link from "next/link";

const BookCard = ({ book }) => {
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