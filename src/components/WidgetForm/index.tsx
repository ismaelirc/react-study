import { CloseButton } from "../CloseButton";
import { useState } from "react";

import bugImageUrl from '../../assets/bug.svg';
import ideiaImageUrl from '../../assets/ideia.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";


export const feedbackTypes = {
    BUG:{
        title: 'Problema',
        image:{
            source: bugImageUrl,
            alt:'Imagem de um inseto'
        }
    },
    IDEA:{
        title: 'Ideia',
        image:{
            source: ideiaImageUrl,
            alt: 'Imagem de uma lampada'
        }
    },
    OTHERS:{
        title: 'Outro',
        image:{
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

/**
 * Object.entries(feedbackTypes) =>
 * 
 * [
 *      ['BUG', {...}],
 *      ['IDEA', {...}],
 *      ['THOUGHT', {...}],
 * ]
 * 
 */

export function WidgetForm(){

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    function handleRestartFeedback(){
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative 
                        rounded-2xl mb-4 flex flex-col 
                        items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
            {!feedbackType ? (
                <FeedbackTypeStep
                    onFeedbackTypeChanged={setFeedbackType}
                />
            ) : (
                <FeedbackContentStep 
                    feedbackType={feedbackType}
                    onFeedBackRestartRequested={handleRestartFeedback}    
                />
            )}
            <footer className="text-xs text-neutral-400">
                Feito com amor pelo Ismael
            </footer>
        </div>
    )
}