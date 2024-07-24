import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import RenderContent from '@/components/RenderContent';

interface ResultProps {
  isCorrect: boolean;
  explanation: string;
  isLastQuestion: boolean;
  onNext: () => void;
}

const Result: React.FC<ResultProps> = ({ isCorrect, explanation, isLastQuestion, onNext }) => {
  return (
    <>
      <Alert className={`mt-4 ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
        <AlertTitle>{isCorrect ? 'Correct!' : 'Incorrect'}</AlertTitle>
        <AlertDescription>
          <RenderContent content={explanation} />
        </AlertDescription>
      </Alert>
      {isLastQuestion
        ? (
            <Button onClick={onNext} className="w-full mt-4">
              Show Results
            </Button>
          )
        : (
            <Button onClick={onNext} className="w-full mt-4">
              Next Level
            </Button>
          )}
    </>
  );
};

export default Result;
