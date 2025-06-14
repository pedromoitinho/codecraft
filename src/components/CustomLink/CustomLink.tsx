import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useLoading } from '../../contexts/LoadingContext';

interface LinkProps extends React.ComponentProps<typeof RouterLink> {
  // You can add any custom props here if needed
}

const CustomLink: React.FC<LinkProps> = ({ to, children, onClick, ...rest }) => {
  const { showLoading, hideLoading } = useLoading();
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Call the original onClick if provided
    if (onClick) {
      onClick(event);
    }
    
    // Only proceed if the event hasn't been prevented
    if (!event.defaultPrevented) {
      event.preventDefault(); // Prevent the default Link navigation
      showLoading(); // Show loading screen immediately
      
      // Navigate after a short delay to allow loading screen to show
      setTimeout(() => {
        navigate(to as string);
        hideLoading();
      }, 300); // Shorter delay for better UX
    }
  };

  return (
    <RouterLink to={to} {...rest} onClick={handleClick}>
      {children}
    </RouterLink>
  );
};

export default CustomLink;
