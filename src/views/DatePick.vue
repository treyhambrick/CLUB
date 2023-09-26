<template>
    <div>
        <div class="picker">
            <P ref="p">
                <h1>Pick your dates </h1>
                <form v-on:submit.prevent="onSubmit" class="form">
                <VueDatePicker v-model="date"  range format="MM/dd/yyyy" value-format="MM-dd-yyyy"/>
                <BR/>
                Your email:  
                <input type="text" v-model="email"> 
                <BR/><BR/>
                <button @click="sendReservation()"  >
                    Submit Reservation Request
                </button>  <BR/><BR/>
             
                {{ status }} 
                </form>        
            </P>
        </div>
    </div>

</template>


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
            const date = ref();
            let count = ref(0);
            const status = ref();
            const email = ref();
            const previous_email = ref();
            const previous_date = ref();
            const startDate = new Date();
            const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
            date.value = [startDate, endDate];   
            
            const sendReservation = () => {
                status.value = ''
                //alert(date.value);
                //alert(startDate);
                //alert(endDate);
                if ((email.value) && (date.value != null)){

                    if (count.value > 2){ 
                        alert('Limit of 3 requests');
                    } else if (date.value == previous_date.value){ 
                        alert('Select a diffrent date range');
                    } else { 
                        if (email.value == previous_email.value){ 
                            count.value++
                        } else { 
                            count.value = 0
                        } 
                        //alert('This reservation process is Under Construction');
                        status.value = 'Submit Reservation from email = ' + email.value + ' for dates:' + date.value 
                        //const fs = require('fs');
                        //const data = JSON.stringify(status.value)
                        //try { fs.writeFileSync('reservations.txt', data, 'utf-8'); }
                        //catch(e) { alert('Failed to save the file !' + e.message); }

                        //if (count.value) {
                        //count.value++
                        //status.value = status.value + ' times= ' + count.value  
                        previous_email.value = email.value
                        previous_date.value = date.value
                    }    

                } else if (date.value == null){
                    alert('Please enter a date range');
                } else {
                    alert('Please enter an email');
                }               
            }

        return {date , email ,startDate , endDate, sendReservation, count, status }
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