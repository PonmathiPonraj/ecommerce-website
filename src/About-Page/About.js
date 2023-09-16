const About = () => {
    return (
        <div>
            <p>lorem ne of your dependencies, babel-preset-react-app, is importing the
                "@babel/plugin-proposal-private-property-in-object" package without        
                declaring it in its dependencies. This is currently working because        
                "@babel/plugin-proposal-private-property-in-object" is already in your     
                node_modules folder for unrelated reasons, but it may break at any time.   

                babel-preset-react-app is part of the create-react-app project, which      
                is not maintianed anymore. It is thus unlikely that this bug will
                ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to  
                your devDependencies to work around this error. This will make this message
                go away.
            </p>
        </div>
    );
};

export default About;