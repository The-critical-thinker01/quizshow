
const QuestionAndAnswer = ({ answers }) => {

    const answersRender = answers.map((item, index) => {
        const isGoodAnswer = item.question.answer === item.answer;
        return (
            <div key={index} className="w-full flex flex-col flex-wrap justify-center border-b p-4">
                <h2 className="text-xl">{item.question.title}</h2>

                <div className="flex space-x-3">
                    {isGoodAnswer ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    }
                    <h2>{item.answer}</h2>
                </div>


            </div>
        )

    })

    return (
        <div className="w-full p-4 flex flex-row flex-wrap justify-center items-center bg-white rounded-xl">
            {answersRender}
        </div>
    );
};


export default QuestionAndAnswer;
