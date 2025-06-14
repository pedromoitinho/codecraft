import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import { LoadingProvider } from './contexts/LoadingContext.tsx'; // Added import
import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<HelmetProvider>
			<LoadingProvider> {/* Added LoadingProvider */} 
				<App />
			</LoadingProvider> {/* Added LoadingProvider */}
		</HelmetProvider>
	</StrictMode>,
)
