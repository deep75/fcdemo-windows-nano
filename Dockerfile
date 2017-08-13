FROM stefanscherer/node-windows:8-nano-onbuild  
EXPOSE 3001
CMD [ "node", "app.js" ]
