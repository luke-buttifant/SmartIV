import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

export default function TextToSpeech() {
  const [value, setValue] = useState('');
  const { speak, voices} = useSpeechSynthesis();

  return (
    <div>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={() => speak({ text: value, voice: voices[4] })}>Speak</button>
    </div>
  );
}