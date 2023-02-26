import { useEffect, useRef } from 'react'
import './ProgressBar.sass'

const ProgressBar = ({ progress }) => {

	const elementProgress = useRef(null)

	useEffect(() => {
		elementProgress.current.style.width = `${progress}%`
	}, [])

	return (
		<div className='progressbar-container'>
			<div className="progress" ref={elementProgress}></div>
		</div>
	)
}

export default ProgressBar