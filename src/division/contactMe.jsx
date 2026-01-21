function ContactMe() {
  return (
    <>
    <div className='div5' style={{ backgroundColor: "#9ac1ff" }}>


      <div className='d5-container1' style={{ backgroundColor: "#f5ff9a", padding: "15px" }}>
        <p>Send me a message</p>
        <img className='d3-img' src="/images/logo-white.png" alt="profile-pic" style={{ width: "200px", backgroundColor: "#61352f" }} />
      </div>


      <div className='d5-container2' style={{ backgroundColor: "#aeff9a" }}>{/* IMG container  */}
        <div className='d5-container2-1' style={{ backgroundColor: "#d0d187" }}>
          <input placeholder="Full Name*"/>
          <input placeholder="Email*"/>
        </div>
        <div className='d5-container2-2' style={{ backgroundColor: "#c7c97f" }}>
          <input placeholder="Subject*"/>
        </div>
        <div className='d5-container2-3' style={{ backgroundColor: "#a9aa82" }}>
          <textarea 
            placeholder="Message*"
            rows={5} // height
            cols={40} // width (optional)
            style={{ resize: "vertical" }} // allows vertical resize only
          />
        </div>
        <div className='d5-container2-4' style={{ backgroundColor: "#868660" }}>
          <button>Send message</button>
        </div>
      </div>


    </div>
    </>
  )
}

export default ContactMe;