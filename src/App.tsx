interface ButtonProps{
	text?: String
}

function Button(props: ButtonProps){
	return <button className="bg-violet-500 p-2 rounded hover:bg-violet-700 transition-colors">{props.text ?? "Default"}</button>
}

function App() {

	return (
		<div className="flex gap-2">
			<Button text="Enviar" />
			<Button text="ok"/>
			<Button />
			
		</div>
	)
}

export default App
