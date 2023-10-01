<template>
    <div>
        <div class="picker">
            <P ref="p">
                <h1>Pick your dates </h1>
                <form v-on:submit="sendReservation" class="form" action="https://formspree.io/f/xayglnld" method="POST" target="output_frame">
                <VueDatePicker v-model="date"  range format="MM/dd/yyyy" value-format="MM-dd-yyyy"/>
                <BR/>
                Your email:  
                <input type="text" v-model="email" name="email"> 
                <BR/><BR/>
                <button type="submit"  >
                    Submit Reservation Request
                </button>  <BR/><BR/>
                <input type="text" v-model="message" style="visibility: hidden" name="message">
                {{ status }} 
                <iframe name="output_frame" src="" id="output_frame" width="0" height="0" style="visibility: hidden" ></iframe>
                </form>        
            </P>
        </div>
    </div>
</template>

<style>
    .hide {
        visibility: hidden !important;
    }
</style>

<script>
    import { ref,  } from 'vue';
  
    export default {
        saveFile: function() {
            const data = JSON.stringify(this.arr)
            const fs = require('fs');
            try { fs.writeFileSync('myfile.txt', data, 'utf-8'); }
            catch(e) { alert('Failed to save the file !'); }
        },
        setup() {
            const message = ref();
            const date = ref();
            let count = ref(0);
            const status = ref();
            const email = ref();
            const previous_email = ref();
            const previous_date = ref();
            const startDate = new Date();
            const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
            date.value = [startDate, endDate];   
            
            const sendReservation = (e) => {
                
                status.value = ''
                //alert(date.value);
                //alert(startDate);
                //alert(endDate);
                if ((email.value) && (date.value != null)){

                    if (count.value > 2){ 
                        alert('Limit of 3 requests');
                        e.preventDefault();
                    } else if (date.value == previous_date.value){ 
                        alert('Select a diffrent date range');
                        e.preventDefault();
                    } else { 
                        if (email.value == previous_email.value){ 
                            count.value++
                        } else { 
                            count.value = 0
                        } 
                        //alert('This reservation process is Under Construction');
                        //startDate.value = "12345678901234567890"
                        
                        //let startDateTemp = '';
                        startDate.value = '' + startDate;
                        endDate.value = '' + endDate;
                        //alert(startDateTemp)
                        //startDateTemp = startDate.value.substring(0,15);
                        //alert(startDateTemp)
                        message.value = 'Submitted Reservation from email = ' + email.value + ' for dates: ' + startDate.value.substring(0,15) + ' to ' + endDate.value.substring(0,15)
                        message.value =  message.value.replace("GMT-0400 (Eastern Daylight Time)", "");
                        message.value =  message.value.replace("GMT-0400 (Eastern Daylight Time)", "");
                        //const fs = require('fs');
                        //const data = JSON.stringify(status.value)
                        //try { fs.writeFileSync('reservations.txt', data, 'utf-8'); }
                        //catch(e) { alert('Failed to save the file !' + e.message); }

                        previous_email.value = email.value
                        previous_date.value = date.value
                        e.submit;
                        //alert(message.value);
                        status.value = message.value
                    }    

                } else if (date.value == null){
                    alert('Please enter a date range');
                    e.preventDefault();
                } else {
                    alert('Please enter an email');
                    e.preventDefault();
                }               
            }

        return {date , email ,startDate , endDate, sendReservation, count, status, message }
        }
    }
 
    
</script>


//        email: "email",
//count: 1,
            //status.value = 'Submit Reservation from email = ' 
            ///p.value.textContent = 'xxx';
//email.value = 'eee';
//const status = computed (() => {
//   return  email.value
// })
//console.log('Submit Reservation');
//count.value++;


<!---script setup>
    import { ref, onMounted } from 'vue';
    const date = ref();
    const email = ref();
    
    email.value = 'eee';
    onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];    
    })
</script--->