import React, {
  useRef, createContext, useEffect, useState,
} from 'react';
import ReactLogo from '../../assets/logos/react.svg';
import NodejsLogo from '../../assets/logos/nodejs.svg';
import CSS3Logo from '../../assets/logos/css3.svg';
import HTML5Logo from '../../assets/logos/graphql.svg';
import JavaScriptLogo from '../../assets/logos/javascript.svg';
import TypeScriptLogo from '../../assets/logos/typescript.svg';
import MongoDBLogo from '../../assets/logos/mongodb.svg';
import SASSLogo from '../../assets/logos/sass.svg';
import ReduxLogo from '../../assets/logos/redux.svg';
import LogosLoader from './LogosLoader';

export const LogosContext = createContext<any>(null);

const LogosProvider: React.FC = ({ children }) => {
  const [isLoaderReady, setIsLoaderReady] = useState<boolean>(false);
  const ReactLogoRef = useRef<HTMLImageElement>(null);
  const NodejsLogoRef = useRef<HTMLImageElement>(null);
  const CSS3LogoRef = useRef<HTMLImageElement>(null);
  const HTML5LogoRef = useRef<HTMLImageElement>(null);
  const JavaScriptLogoRef = useRef<HTMLImageElement>(null);
  const TypeScriptLogoRef = useRef<HTMLImageElement>(null);
  const MongoDBLogoRef = useRef<HTMLImageElement>(null);
  const SASSLogoRef = useRef<HTMLImageElement>(null);
  const ReduxLogoRef = useRef<HTMLImageElement>(null);

  const LogoLoaderRef = useRef<LogosLoader>();

  useEffect(() => {
    LogoLoaderRef.current = new LogosLoader([
      ReactLogoRef.current!,
      NodejsLogoRef.current!,
      CSS3LogoRef.current!,
      HTML5LogoRef.current!,
      JavaScriptLogoRef.current!,
      TypeScriptLogoRef.current!,
      MongoDBLogoRef.current!,
      SASSLogoRef.current!,
      ReduxLogoRef.current!,
    ]);
  }, []);

  useEffect(() => {
    if (LogoLoaderRef.current) {
      setIsLoaderReady(true);
    }
  }, [LogoLoaderRef]);

  return (
    <div>
      <img ref={ReactLogoRef} src={ReactLogo} alt="React Logo" hidden />
      <img ref={NodejsLogoRef} src={NodejsLogo} alt="Node.js Logo" hidden />
      <img ref={CSS3LogoRef} src={CSS3Logo} alt="CSS3 Logo" hidden />
      <img ref={HTML5LogoRef} src={HTML5Logo} alt="HTML5 Logo" hidden />
      <img ref={JavaScriptLogoRef} src={JavaScriptLogo} alt="JavaScript Logo" hidden />
      <img ref={TypeScriptLogoRef} src={TypeScriptLogo} alt="TypeScript Logo" hidden />
      <img ref={MongoDBLogoRef} src={MongoDBLogo} alt="MongoDB Logo" hidden />
      <img ref={SASSLogoRef} src={SASSLogo} alt="SASS Logo" hidden />
      <img ref={ReduxLogoRef} src={ReduxLogo} alt="Redux Logo" hidden />
      {isLoaderReady && (
        <LogosContext.Provider value={LogoLoaderRef.current}>
          {children}
        </LogosContext.Provider>
      )}
    </div>
  );
};

export default LogosProvider;
