// selectAnswer -> A resposta que o usuário escolheu
// onAnswerSelect -> Função chamada quando o usuário clica em uma opção

export default function QuestionCard({data, selectedAnswer, onAnswerSelect}){
    return (
        <div className=" p-4 flex flex-col justify-center gap-4 w-full">
            <h2 className="text-2xl">{data.question}</h2>

            <ul className="flex flex-col gap-4">
                {data.options.map((option)=> {
                const isSelected = option === selectedAnswer

                const optionClasses = `p-4 rounded-lg cursor-pointer transition-colors  ${
                        isSelected 
                        ? 'bg-indigo-600 border-indigo-600 text-white font-bold '
                        : 'bg-zinc-700 border-2 border-zinc-700 hover:bg-zinc-600 hover:border-indigo-400'
                    }`;

                return (
                    <li className={optionClasses} key={`${data.id}-${option}`} onClick={()=> onAnswerSelect(option)}>
                        {option}
                    </li>
                )
            })}
            </ul>

        </div>
    )
}