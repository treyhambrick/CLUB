
<template>
    <div>
        <div class="picker">
            <P ref="p">
                <h1>Pick your dates </h1>                                
                <form v-on:submit="sendReservation" class="form" action="https://formspree.io/f/xayglnld" method="POST" target="output_frame">
                    <CENTER>
                    <TABLE>
                        <TR>
                            <TD>
                                <VueDatePicker v-model="date"  range format="MM/dd/yyyy" value-format="MM-dd-yyyy" :disabled-dates="disabledDates"/>
                    
                            </TD>
                        </TR>
                    </TABLE> 
                    </CENTER>
                    <BR/>
                    Your email:  
                    <input type="text" v-model="email" name="email"> 
                    <BR/><BR/>
                    <button type="submit"  >
                        Submit Reservation Request 
                    </button>  <BR/>
                    <input type="text" v-model="message" style="visibility: hidden" name="message">
                    
                    <CENTER>{{ status }}</CENTER><BR/>
                    <CENTER>Current Schedule</CENTER>

                    <CENTER>
                    <TABLE>
                        <TR>
                            <TD>
                                <VueDatePicker v-model="dateCal"  :markers="markers" :inline="{ input: true }" text-input auto-apply :disabled-dates="disabledDates"  position="center"  dark  />
                    
                            </TD>
                        </TR>
                    </TABLE> 
                        </CENTER>
                    <iframe name="output_frame" src="" id="output_frame" width="800" height="200" style="visibility: hidden" ></iframe>

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
    import { ref, computed  } from 'vue';
    import addDays from 'date-fns/addDays';

    const disabledDates = computed(() => {
    const today = new Date();

    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() -1)

    //const afterTomorrow = new Date(tomorrow);
    //afterTomorrow.setDate(tomorrow.getDate() + 1);  , afterTomorrow

    return [tomorrow]
    })
    
    const markers = ref([
    {
        date: addDays(new Date(), 1),
        type: 'line',
        color: 'green',
        tooltip: [{ text: 'Avaliable Start here', color: 'green' }],
    },
    {
        date: addDays(new Date(), 78),
        type: 'line',
        color: 'red',
        tooltip: [{ text: 'Not Avaliable Start here', color: 'red' }],
    },
    {
        date: addDays(new Date(), 97),
        type: 'line',
        color: 'green',
        tooltip: [{ text: 'Avaliable Start here', color: 'green' }],
    },
    {
        date: addDays(new Date(), 140),
        type: 'line',
        color: 'red',
        tooltip: [{ text: 'Not Avaliable Start here', color: 'red' }],
    },
    {
        date: addDays(new Date(), 179),
        type: 'line',
        color: 'green',
        tooltip: [{ text: 'Avaliable Start here', color: 'green' }],
    },

    ])
    export default {
        //target="output_frame"
        //saveFile: function() {
        //    const data = JSON.stringify(this.arr)
        //    const fs = require('fs');
        //    try { fs.writeFileSync('myfile.txt', data, 'utf-8'); }
        //    catch(e) { alert('Failed to save the file !'); }
        //},
        setup() {
            const message = ref();
            const date = ref();
            
            const dateCal = ref(new Date());
            let count = ref(0);
            const status = ref();
            const email = ref();
            const previous_email = ref();
            const previous_date = ref();
            const startDate = new Date();
            const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
            date.value = [startDate, endDate];  
            //count.value = 0; 

            const sendReservation = (e) => {
                
                status.value = ''
                if (email.value == previous_email.value){ 
                    count.value++
                } else { 
                    count.value = 0
                } 
                //alert(count.value);
                //alert(email.value);
                //alert(previous_email.value);

                if ((email.value) && (date.value != null)){

                    if (count.value > 2){ 
                        alert('Limit of 2 requests');
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
                        //alert(date.value) 
                        message.value = '' + date.value;
                        //alert(message.value.substr(0,11)) 
                        //alert(message.value.substr(58,11)) 
                        //let startDateTemp = '';
                        //startDate.value = '' + startDate;

                        message.value = 'Submitted Reservation from email = ' + email.value + ' for dates: ' + message.value.substr(0,11) + ' to ' + message.value.substr(58,11)
                        //message.value = 'Submitted Reservation from ' + email.value + ' for dates: ' + date.value
                        message.value =  message.value.replace("GMT-0400 (Eastern Daylight Time)", "");
                        message.value =  message.value.replace("GMT-0400 (Eastern Daylight Time)", "");
                        //const fs = require('fs');
                        //const data = JSON.stringify(status.value)
                        //try { fs.writeFileSync('reservations.txt', data, 'utf-8'); }
                        //catch(e) { alert('Failed to save the file !' + e.message); }

                        previous_email.value = email.value
                        previous_date.value = date.value
                        //e.submit;
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

        return {date , dateCal , email ,startDate , endDate, sendReservation, count, status, message, disabledDates,markers}
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