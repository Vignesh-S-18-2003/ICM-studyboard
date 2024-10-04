import React from 'react';

function ThreeColumnComponent() {
  return (
    <>
    <h1 className='text-center mb-5'>Check SIM Cards!</h1>
    <div className="container-fluid d-flex justify-content-center mb-5" style={{ width: '80vw' }}>
        
      <div className="row w-100">
        <div className="col-12 col-md-4 mb-4">
          <div className="p-3 border bg-light">
            <h4>Australia</h4>
            
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <div className="p-3 border bg-light">
            <h4>Canada</h4>
            
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <div className="p-3 border bg-light">
            <h4>France</h4>
           
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <div className="p-3 border bg-light">
            <h4>Germany</h4>
            
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <div className="p-3 border bg-light">
            <h4>Ireland
</h4>
            
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <div className="p-3 border bg-light">
            <h4>USA</h4>
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ThreeColumnComponent;
