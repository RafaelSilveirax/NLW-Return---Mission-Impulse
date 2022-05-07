import { useState } from "react";
import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl  from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedBacktContentStep";


export const feedbackTypes = {
    BUG:{
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Image inseto'
        },
    },
    IDE: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Image ideia'
        }
    },
    OTHER:{
        title: 'Outros',
        image: {
            source: thoughtImageUrl,
            alt: 'Image balão'
        }
    },
}

export type feedbackType =  keyof typeof feedbackTypes

export function WidgetForm(){
    const [feedbackType, setFeedbackType ] = useState<feedbackType | null>(null)


    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 
        flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6"> Deixe seu Feedback</span>

                <CloseButton/>
            </header>

       {!feedbackType ? (
           <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
       ):(
           <FeedbackContentStep/>
       )}

            <footer className="text-xs text-neutral-400">
                Feito por <a className="underline underline-offset-2" href="https://rafaelsilveirax.github.io/RafSilveira/">RafSilveira</a>  🚀 
            </footer>

            
        </div>
    );
}