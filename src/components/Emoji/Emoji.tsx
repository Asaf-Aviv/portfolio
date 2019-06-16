import React from 'react';

interface EmojiProps {
  emoji: string;
  label: string;
}

const Emoji: React.FC<EmojiProps> = ({ emoji, label }) => (
  <span aria-label={label}>{emoji}</span>
);

export default Emoji;
