import Button from "./Button"

export default function Section(){
    return(
        <section className="p-6 my-4  border-2 rounded-lg">
            <p className="mb-4 text-sm opacity-70">Paragrafo dentro da Section </p>

            {/* Button com a lógica do tema */}
            <Button></Button>

        </section>
    )
}