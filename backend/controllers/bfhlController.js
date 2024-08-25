exports.getBfhl = (req, res) => {
    res.status(200).json({ operation_code: 1 });
};

exports.postBfhl = (req, res) => {
    const { data } = req.body;
    const user_id = "your_name_ddmmyyyy"; // Replace with actual logic
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highest_lowercase_alphabet = alphabets.filter(char => char === char.toLowerCase()).sort().pop() || '';

    res.status(200).json({
        is_success: true,
        user_id: user_id,
        email: "your_email@college.com", // Replace with actual email
        roll_number: "your_roll_number", // Replace with actual roll number
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: [highest_lowercase_alphabet],
    });
};
