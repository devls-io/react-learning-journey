import { quizData } from "./data/quizData";
import { useState } from "react";
import Button from "./components/Button";
import QuestionCard from "./components/QuestionCard";
import ResultScreen from "./components/ResultScreen";
export default function App(){

  const [quizState, setQuizState] = useState('welcome')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswer] = useState(
    ()=> new Array(quizData.length).fill(null)
  )
  const [score, setScore] = useState(0)

  
  // Salvar a resposta

  const handleAnswerSelect = (answer)=> {
    const newAnswers = [...userAnswers]

    newAnswers[currentQuestionIndex] = answer

    setUserAnswer(newAnswers)
  }

  // Resposta selecionada pelo usuário (no inicio é null)
  const currentAnswer = userAnswers[currentQuestionIndex]

  // Navegar entre as perguntas

  const nextQuestion = ()=> {
    setCurrentQuestionIndex(prev=> Math.min(prev + 1, quizData.length-1))
  }

  const prevQuestion = ()=> {
    setCurrentQuestionIndex(prev=> Math.max(prev -1 , 0))
  }

  // Primeira pergunta e Ultima pergunta

  const isFirst = currentQuestionIndex === 0
  const isLast = currentQuestionIndex === quizData.length -1

  // Pontuação final
  const calculateScore = ()=> {
    let newScore = 0
    userAnswers.forEach((answer, index)=> {
      if(answer === quizData[index].correctAnswer){
        newScore++
      }
    })

    return newScore
  }

  // Verificar se temos todas as respostas

  const isQuizComplete = userAnswers.every(answer=> answer !== null)

  // Resetar Quiz

  const resetQuiz = ()=> {
    setCurrentQuestionIndex(0)
    setUserAnswer(new Array(quizData.length).fill(null))
    setScore(0)
    setQuizState('welcome')
  }



  // Renderizar conteúdo
  let content;

  if(quizState === 'welcome'){
    content = (
      <div className="border-x-4 border-indigo-200 py-4 px-4 flex flex-col gap-4 items-center">
        <h1 className="text-4xl font-bold tracking-widest">Quiz React</h1>
        <p className="font-semibold">
          Bem vindo(a) ao Quiz! Teste suas habilidades respondendo algumas perguntas. Clique no botão abaixo e boa sorte!
        </p>
        <Button  action={()=> setQuizState('progress')} className="hover:bg-indigo-600 bg-indigo-400">
          Iniciar Quiz
        </Button>
      </div>
    )
  } else if(quizState === 'progress'){
    content = (
      <div className=" w-[90%] max-w-[800px] ">
        {/* Mostra a pergunta baseada no index */}
         <QuestionCard
          data={quizData[currentQuestionIndex]}
          selectedAnswer={currentAnswer}
          onAnswerSelect={handleAnswerSelect} />

          <div className="flex justify-between items-center p-4">
              <Button action={prevQuestion} disabled={isFirst} className="hover:bg-indigo-600 bg-indigo-400" >
                &larr; Anterior
              </Button>

              <Button action={nextQuestion} disabled={isLast} className="hover:bg-indigo-600 bg-indigo-400">
                Proxima &rarr;
              </Button>
          </div>

          {isQuizComplete && (
            <Button action={()=> {
              setScore(calculateScore())
              setQuizState('finished')
            }} className=" block mx-auto mt-4 bg-green-400/60 hover:bg-green-500">
              Finalizar Quiz
            </Button>
          )}

      </div>
    )
  } else if(quizState === 'finished'){
    content = (
      <div >
        <ResultScreen data={quizData} userAnswers={userAnswers} score={score} onReset={resetQuiz} />
      </div>
    )
  }



  return(
    <div className="flex flex-col items-center justify-center min-h-screen p-12">
      {content}
    </div>
  )
}