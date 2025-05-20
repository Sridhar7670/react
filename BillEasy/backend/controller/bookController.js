const Book = require("../model/book")

const getallBooks = async(req,res)=>{
    const books=await Book.find()
    res.json(books)
}

const getBook=async(req,res)=>{
 
    const { query } = req.query;

    const titleRegex = new RegExp(query, "i");

    // Case-sensitive regex for author (no 'i' flag)
    const authorRegex = new RegExp(query,"i"); // Case-sensitive by default

    const books = await Book.find({
        $or: [
            { title: { $regex: titleRegex } },
            { author: { $regex: authorRegex } }
        ]
    });

    res.json(books);


}
const getBookById = async (req, res) => {
  try {
    const data = await Book.findById(req.params.id);  

    if (!data) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json(data); 
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

// const addBook = async (req, res) => {
//     const { title, author, genre } = req.body;
//     const book = new Book({ title, author, genre });
//     await book.save();
//     res.status(201).json({ msg: 'Book added successfully' });
// }; 
// if needed we will use for now commented



const addReview = async (req, res) => {
    const { rating, comment } = req.body;
   
   try{ 
    const book = await Book.findById(req.params.id);
     if (!book) return res.status(404).json({ msg: 'Book not found' });

    const alreadyReviewed = book.reviews.find(r => r.userId === req.user._id);
    if (alreadyReviewed) return res.status(400).json({ msg: 'Already reviewed' });

    book.reviews.push({ userId: req.user._id, username: req.user._id, rating, comment });
    await book.save();
    res.status(201).json({ msg: 'Review added' });
   }
   catch(err){console.log(err.message);
    res.json("err")
  }
};

const updateReview = async (req, res) => {
  
    const { rating, comment } = req.body;
    try {
        const book = await Book.findOne({ 'reviews._id': req.params.id });
        console.log("id",req.params.id,"reviwes_id",book,book.reviews);

        if (!book) {
            return res.status(404).json({ msg: 'Review not found' });
        }

        const review = book.reviews.id(req.params.id);
        if (!review) {
            return res.status(404).json({ msg: 'Review not found in book' });
        }

        if (review.userId !== req.user._id) {
            return res.status(403).json({ msg: 'Unauthorized' });
        }

        review.rating = rating;
        review.comment = comment;
        await book.save();

        res.json({ msg: 'Review updated' });
    } catch (err) {
        console.error('Error updating review:', err.message);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
};

const deleteReview = async (req, res) => {
    try {
        const book = await Book.findOne({ 'reviews._id': req.params.id });
        
        if (!book) return res.status(404).json({ msg: 'Review not found' });
        
        const review = book.reviews.id(req.params.id);
        if (!review) return res.status(404).json({ msg: 'Review not found in book' });
        

        if (review.userId !== req.user._id) {
            return res.status(403).json({ msg: 'Unauthorized' });
        }

        review.remove();
        await book.save();

        res.json({ msg: 'Review deleted' });
    } 
    catch (err) {
        console.error('Error deleting review:', err.message);
        res.status(500).json({ msg: 'Internal server error' });
    }
};


module.exports= {getallBooks ,getBookById,getBook,addReview,updateReview,deleteReview}