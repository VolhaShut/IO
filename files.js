var fs=require('fs');
var buf = new Buffer(200);
 (function(){
      var inputFile='testsmall.txt',
      outputFile='test2.txt',
      n=120;

      var strInput=fs.createReadStream(inputFile,{
                                                start:0,
                                                end:n 
      });
      var strInput1=fs.createReadStream(inputFile);

      var strOutput=fs.createWriteStream(outputFile);
    
        //   strInput.on('data' , (buf)=>{
              
        //         strInput.start=n;
        //         strInput.end=n+120;
        //         n=n+120;
        //         strOutput.write(buf);
        //  });

       strInput1.on('readable',()=>{
           var chunk;
            while (null !== (buf = strInput1.read(20))) {
                        console.log(`Received ${buf.length} bytes of data.`);
                        strOutput.write(buf);
                       
                }             
       })

       // strInput.on('end', ()=>{
       //     console.log("end");
            
       // })
 })()
