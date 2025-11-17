import Button from "./Button"
export default function ResultScreen({score, data, userAnswers, onReset}){

    return(
        <div >
           
            <h2 className="text-2xl mb-4 text-center">Você acertou {score} de {data.length} questões!</h2>

            {data.map((q, index)=> {
                const userAnswer = userAnswers[index]
                const isCorrect = userAnswer === q.correctAnswer

                return(
                    <div key={q.id}
                     className="mb-4 p-4 rounded-lg bg-zinc-800 shadow-md flex flex-col gap-2">
                        <h3 className="font-semibold text-lg mb-2">Pergunta: {q.question}</h3>

                        <p className={`py-2 px-4 rounded-md font-semibold ${isCorrect ? 'bg-green-600/40 text-white' : 'bg-red-600/30 text-white'}`}>
                         Sua resposta: {userAnswer}
                        </p>

                        {!isCorrect && (
                            <p className="py-2 px-4 rounded-md bg-zinc-700 text-yellow-300 font-semibold">
                                Resposta correta: {q.correctAnswer}
                            </p>
                        )}

                    </div>
                )
            })}



            <Button action={onReset} className="hover:bg-indigo-600 bg-indigo-400 block mx-auto mt-4">
                Refazer Quiz
            </Button>
        </div>
    )

}