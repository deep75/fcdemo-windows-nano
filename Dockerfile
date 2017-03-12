FROM stefanscherer/node-windows:7.7.2-nano-onbuild  
EXPOSE 3001
CMD [ "node", "app.js" ]
