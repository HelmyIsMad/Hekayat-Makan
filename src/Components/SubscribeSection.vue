<template>
  <section dir="rtl" class="subscribe-section">
    <div class="subscribe-container">
       
      <span class="subscribe-badge">
        <span class="badge-dot"></span>
        انضم إلى مجتمع حكاية مكان
      </span>

      
      <h2 class="subscribe-heading">لا تفوّت أي حكاية جديدة</h2>

      
      <p class="subscribe-subheading">
        اشترك في نشرتنا البريدية وكن أول من يعرف عن الأماكن والحكايات
        الجديدة التي نضيفها من تراث مصر.
      </p>

      
      <form class="subscribe-form" @submit.prevent="handleSubmit">
        <input
          v-model="email"
          type="email"
          dir="rtl"
          required
          placeholder="بريدك الإلكتروني"
          class="subscribe-input"
        />

        <button type="submit" class="subscribe-button" :disabled="status === 'loading'">
          <span>{{ status === 'loading' ? 'جارٍ الاشتراك...' : 'اشترك الآن' }}</span>
          <svg
            v-if="status !== 'loading'"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            class="send-icon"
          >
            <path
              d="M21.5 2.5L10.9 13.1M21.5 2.5L14.8 21.5L10.9 13.1M21.5 2.5L2.5 9.2L10.9 13.1"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </form>

     
      <p class="subscribe-note">
        {{ status === 'success'
          ? 'تم الاشتراك بنجاح، شكرًا لانضمامك إلينا! 🎉'
          : 'لن نشارك بريدك الإلكتروني مع أي جهة، ويمكنك إلغاء الاشتراك في أي وقت.' }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const status = ref('idle') // idle | loading | success | error

async function handleSubmit() {
  if (!email.value) return

  status.value = 'loading'
  try {
    
    await new Promise((resolve) => setTimeout(resolve, 900))
    status.value = 'success'
    email.value = ''
  } catch (err) {
    status.value = 'error'
  }
}
</script>

<style scoped>
.subscribe-section {
  background: #EAE1D8;
  padding: 80px 24px;
}

.subscribe-container {
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
}

.subscribe-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid #E4DCCF;
  border-radius: 999px;
  padding: 6px 16px;
  font-size: 13px;
  color: #256158;
  margin-bottom: 24px;
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #256158;
  display: inline-block;
}

.subscribe-heading {
  font-size: 34px;
  font-weight: 700;
  color: #1F2421;
  line-height: 1.4;
  margin: 0 0 12px;
}

.subscribe-subheading {
  font-size: 16px;
  color: #5B584F;
  line-height: 1.8;
  margin: 0 auto 32px;
  max-width: 480px;
}

.subscribe-form {
  display: flex;
  gap: 12px;
  max-width: 420px;
  margin: 0 auto;
}

.subscribe-input {
  flex: 1;
  height: 56px;
  border-radius: 999px;
  background: #FAF8F4;
  border: 1px solid #E4DCCF;
  padding: 0 24px;
  font-size: 15px;
  color: #2A2D2A;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.subscribe-input::placeholder {
  color: #8B8578;
}

.subscribe-input:focus {
  border-color: #256158;
  box-shadow: 0 0 0 3px rgba(37, 97, 88, 0.15);
}

.subscribe-button {
  height: 56px;
  padding: 0 32px;
  border: none;
  border-radius: 999px;
  background: #256158;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.2s;
}

.subscribe-button:hover {
  background: #1E4F47;
}

.subscribe-button:active {
  background: #183F39;
}

.subscribe-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.send-icon {
  transform: rotate(180deg);
}

.subscribe-note {
  font-size: 13px;
  color: #8B8578;
  margin-top: 16px;
}

@media (max-width: 640px) {
  .subscribe-form {
    flex-direction: column;
  }
}
</style> 