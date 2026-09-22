export const generateStaticParams = async() => {
    const res = await fetch('http://localhost:5000/books');

    const books = await res.json();

    return books.map(book => ({bookId: book.id}));
}

const BookDetailage = async({params}) => {

    const {bookId} = await params;

    const res = await fetch(`http://localhost:5000/books/${bookId}`);

    const book = await res.json();

    return (
        <div>
            <h2>Book details</h2>

            <h1>title: {book.title}</h1>

            <p>description: {book.description}</p>

            <p>authoe: {book.author}</p>
        </div>
    );
};

export default BookDetailage;