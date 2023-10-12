
<template>
    <div>
        <div>
            <P ref="p">
                <h1>Pick your dates </h1>                                
                <form v-on:submit="sendReservation" class="form" action="https://formspree.io/f/xayglnld" method="POST" target="output_frame" name="form">
                    <CENTER>
                    <TABLE class="picker" :class="(screenType == 'LAPTOP') ? 'picker' : 'pickerMoble'">
                        <TR>
                            <TD>
                                <VueDatePicker v-model="date"  range format="MM/dd/yyyy" value-format="MM-dd-yyyy" :enable-time-picker="false"  :disabled-dates="disabledDates"  :markers="markers"/>
                    
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
                    
                    <CENTER>{{ status }} </CENTER><BR/>
                    <CENTER>Current Schedule</CENTER>

                    <CENTER>
                    <TABLE>
                        <TR>
                            <TD>
                                <VueDatePicker v-model="dateCal"  :markers="markers" :enable-time-picker="false"  :inline="{ input: true }" text-input auto-apply  position="center"  dark  />
                            </TD>
                        </TR>
                    </TABLE> <BR/>

                    <p>{{screenType}} Screen width: {{ screenWidth }}px  ip:{{ ipadd }} </p>
                    </CENTER>
                    <iframe name="output_frame" src="" id="output_frame" width="800" height="800" style="visibility: hidden" ></iframe>
                    <!---input type="text" v-model="ipadd" name="ipaddress" style="visibility: hidden"---> 
                    
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
        tomorrow.setDate(tomorrow.getDate() - 2)

        //const afterTomorrow = new Date(tomorrow);
        //afterTomorrow.setDate(tomorrow.getDate() + 1);  , afterTomorrow

        return []
    })

    const markers = ref([
    {
        date: addDays(new Date(), 1),
        type: 'line',
        color: 'green',
        tooltip: [{ text: 'Avaliable Start here', color: 'green' }],
    },
    {
        date: addDays(new Date(), moment.duration(moment(new Date(), "YYYY-MM-DD").diff(moment("2023-12-08", "YYYY-MM-DD"))).asDays() *-1),
        type: 'line',
        color: 'red',
        tooltip: [{ text: 'Reserved', color: 'red' }],
    },
    {
        date: addDays(new Date(), moment.duration(moment(new Date(), "YYYY-MM-DD").diff(moment("2023-12-09", "YYYY-MM-DD"))).asDays() *-1),
        type: 'line',
        color: 'red',
        tooltip: [{ text: 'Reserved', color: 'red' }],
    },
    {
        date: addDays(new Date(), moment.duration(moment(new Date(), "YYYY-MM-DD").diff(moment("2023-12-10", "YYYY-MM-DD"))).asDays() *-1),
        type: 'line',
        color: 'red',
        tooltip: [{ text: 'Reserved', color: 'red' }],
    },
    {
        date: addDays(new Date(), moment.duration(moment(new Date(), "YYYY-MM-DD").diff(moment("2023-12-11", "YYYY-MM-DD"))).asDays() *-1),
        type: 'line',
        color: 'red',
        tooltip: [{ text: 'Reserved', color: 'red' }],
    },
    {
        date: addDays(new Date(), moment.duration(moment(new Date(), "YYYY-MM-DD").diff(moment("2023-12-12", "YYYY-MM-DD"))).asDays() *-1),
        type: 'line',
        color: 'red',
        tooltip: [{ text: 'Reserved', color: 'red' }],
    },
    {
        date: addDays(new Date(), moment.duration(moment(new Date(), "YYYY-MM-DD").diff(moment("2023-12-13", "YYYY-MM-DD"))).asDays() *-1),
        type: 'line',
        color: 'red',
        tooltip: [{ text: 'Reserved', color: 'red' }],
    },
    {
        date: addDays(new Date(), moment.duration(moment(new Date(), "YYYY-MM-DD").diff(moment("2023-12-14", "YYYY-MM-DD"))).asDays() *-1),
        type: 'line',
        color: 'red',
        tooltip: [{ text: 'Reserved', color: 'red' }],
    },
    {
        date: addDays(new Date(), moment.duration(moment(new Date(), "YYYY-MM-DD").diff(moment("2023-12-15", "YYYY-MM-DD"))).asDays() *-1),
        type: 'line',
        color: 'red',
        tooltip: [{ text: 'Reserved', color: 'red' }],
    },
    {
        date: addDays(new Date(), moment.duration(moment(new Date(), "YYYY-MM-DD").diff(moment("2023-12-16", "YYYY-MM-DD"))).asDays() *-1),
        type: 'line',
        color: 'red',
        tooltip: [{ text: 'Reserved', color: 'red' }],
    },
    {
        date: addDays(new Date(), moment.duration(moment(new Date(), "YYYY-MM-DD").diff(moment("2023-12-17", "YYYY-MM-DD"))).asDays() *-1),
        type: 'line',
        color: 'red',
        tooltip: [{ text: 'Reserved', color: 'red' }],
    },
    {
        date: addDays(new Date(), moment.duration(moment(new Date(), "YYYY-MM-DD").diff(moment("2023-12-18", "YYYY-MM-DD"))).asDays() *-1),
        type: 'line',
        color: 'red',
        tooltip: [{ text: 'Reserved', color: 'red' }],
    },
    {
        date: addDays(new Date(), moment.duration(moment(new Date(), "YYYY-MM-DD").diff(moment("2023-12-20", "YYYY-MM-DD"))).asDays() *-1),
        type: 'line',
        color: 'red',
        tooltip: [{ text: 'I arrive till Jan 4', color: 'red' }],
    },
    {
        date: addDays(new Date(), moment.duration(moment(new Date(), "YYYY-MM-DD").diff(moment("2024-01-05", "YYYY-MM-DD"))).asDays() *-1),
        type: 'line',
        color: 'green',
        tooltip: [{ text: 'Avaliable Start here', color: 'green' }],
    },
    {
        date: addDays(new Date(), moment.duration(moment(new Date(), "YYYY-MM-DD").diff(moment("2024-02-19", "YYYY-MM-DD"))).asDays() *-1),
        type: 'line',
        color: 'red',
        tooltip: [{ text: 'I arrive till March 26', color: 'red' }],
    },
    {
        date: addDays(new Date(), moment.duration(moment(new Date(), "YYYY-MM-DD").diff(moment("2024-03-27", "YYYY-MM-DD"))).asDays() *-1),
        type: 'line',
        color: 'green',
        tooltip: [{ text: 'Avaliable Start here', color: 'green' }],
    },

    ])

    import moment from 'moment';
    
    export default {
        
        data() {
        return {
            screenWidth: 0,
            screenType:'',
            //ipadd:'',
            };
            },
            mounted() {
                this.updateScreenWidth();
                this.onScreenResize();
                fetch('https://api.ipify.org?format=json')
                    .then(x => x.json())
                    .then(({ ip }) => {
                        this.ipadd = ip;
                    });
            },
            methods: {
            onScreenResize() {
                window.addEventListener("resize", () => {
                this.updateScreenWidth();
                });
            },
            updateScreenWidth() {
                this.screenWidth = window.innerWidth;
                if (window.innerWidth <700) 
                    this.screenType = "MOBLE";
                else
                    this.screenType = "LAPTOP";
            },

        },
        setup() {
            
            const message = ref();
            const date = ref();
            const dateCal = ref(new Date());
            let count = ref(0);
            const status = ref();
            const email = ref();
            
            //const ipaddress = ref();
            const ipadd = ref({})
            const previous_email = ref();
            const previous_date = ref();
            const startDate = new Date();
            const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
            date.value = [startDate, endDate];  

            const sendReservation = (e) => {
 
                status.value = ''
                if (email.value == previous_email.value){ 
                    count.value++
                } else { 
                    count.value = 0
                } 
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
                        //alert(ipadd.value) //+ ' from ' + ipadd.value
                        message.value = '' + date.value;
                        message.value = 'Submitted Reservation from email = ' + email.value + ' for dates: ' + message.value.substr(0,11) + ' to ' + message.value.substr(58,11) + ' from ' + ipadd.value 

                        message.value =  message.value.replace("GMT-0400 (Eastern Daylight Time)", "");
                        message.value =  message.value.replace("GMT-0400 (Eastern Daylight Time)", "");

                        previous_email.value = email.value
                        previous_date.value = date.value
                        
                        //alert(message.value);
                        status.value = message.value
                        //e.submit;
                    }    

                } else if (date.value == null){
                    alert('Please enter a date range');
                    e.preventDefault();
                } else {
                    alert('Please enter an email');
                    e.preventDefault();
                }               
            }

        return { ipadd, date , dateCal , email ,startDate , endDate, sendReservation, count, status, message, disabledDates, markers}
        }
    }
 
    
</script>


<style>
    .hide {
        visibility: hidden !important;
    }
  .picker {
    float: center;
    margin-right: 2%;
    margin-left: 2%;
    position: relative;
    text-align: center;
    width: 600px;
  }
  .pickerMoble {
    float: center;
    margin-right: 2%;
    margin-left: 2%;
    position: relative;
    text-align: center;
    width: 280px;
  }

</style>

<!--- 
<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>


 
<template>
    <div id="app">
      <p>Screen width: {{ screenWidth }}px</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "App",
    data() {
      return {
        screenWidth: 0,
      };
    },
    mounted() {
      this.updateScreenWidth();
      this.onScreenResize();
    },
    methods: {
      onScreenResize() {
        window.addEventListener("resize", () => {
          this.updateScreenWidth();
        });
      },
      updateScreenWidth() {
        this.screenWidth = window.innerWidth;
      },
    },
  };
  </script>
  --->




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