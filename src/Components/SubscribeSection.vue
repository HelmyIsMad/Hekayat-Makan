<template>
  <section dir="rtl" class="subscribe-section">
    <div class="subscribe-container">
       
      <span class="subscribe-badge">
        <span class="badge-dot"></span>
        انضم إلى مجتمع حكاية مكان
      </span>

      
      <h2 class="subscribe-heading">لا تفوّت أي حكاية جديدة</h2>

      <div class="ornament">
        <span></span>
        <svg viewBox="0 0 24 24" class="ornament-icon">
          <path d="M12 2 L14 9 L21 9 L15.5 13.5 L17.5 21 L12 16.8 L6.5 21 L8.5 13.5 L3 9 L10 9 Z" />
        </svg>
        <span></span>
      </div>
      
      <p class="subscribe-subheading">
        اشترك في نشرتنا البريدية وكن أول من يعرف عن الأماكن والحكايات
        الجديدة التي نضيفها من تراث مصر.
      </p>

      <div class="subscribe-card-wrapper">
        <form class="subscribe-form" @submit.prevent="handleSubmit">
          <input
            v-model="email"
            type="email"
            dir="rtl"
            required
            placeholder="اكتب بريدك الإلكتروني هنا..."
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
      </div>
     
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
  width: 100%;
  background: #f8f4ed;
  border-block: 1px solid #ece3d2;
  padding: 88px clamp(16px, 4vw, 48px);
  position: relative;
  overflow: hidden;
}

.subscribe-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(#b8863b 0.75px, transparent 0.75px);
  background-size: 24px 24px;
  opacity: 0.08;
  pointer-events: none;
}

.subscribe-container {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.subscribe-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fffdf8;
  border: 1px solid #b8863b;
  border-radius: 999px;
  padding: 6px 16px;
  font-size: 0.78rem;
  font-weight: 700;
  color: #241a10;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(184, 134, 59, 0.08);
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #b8863b;
  display: inline-block;
}

.subscribe-heading {
  font-family: 'Aref Ruqaa', serif;
  font-size: clamp(2.2rem, 3.5vw, 2.8rem);
  font-weight: 700;
  color: #241a10;
  line-height: 1.3;
  margin: 0 0 16px;
}
.ornament {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.ornament span {
  height: 1px;
  width: 50px;
  background: linear-gradient(to left, #b8863b, transparent);
}

.ornament span:last-child {
  background: linear-gradient(to right, #b8863b, transparent);
}

.ornament-icon {
  width: 14px;
  height: 14px;
  fill: #b8863b;
}

.subscribe-subheading {
  font-size: 1rem;
  color: #6b573f;
  line-height: 1.9;
  margin: 0 auto 36px;
  max-width: 520px;
}

.subscribe-card-wrapper {
  background: #fffdf8;
  border: 1px solid #e2d8c4;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 12px 35px -15px rgba(30, 74, 69, 0.1);
  transition: all 0.4s ease;
}

.subscribe-card-wrapper:hover {
  border-color: #d9c49a;
  box-shadow: 0 16px 45px -15px rgba(30, 74, 69, 0.15);
}

.subscribe-form {
  display: flex;
  gap: 12px;
}

.subscribe-input {
  flex: 1;
  height: 56px;
  border-radius: 999px;
  background: #f8f4ed;
  border: 1px solid #e2d8c4;
  padding: 0 24px;
  font-size: 0.95rem;
  color: #241a10;
  outline: none;
  transition: all 0.3s ease;
}

.subscribe-input::placeholder {
  color: #9c8a74;
}

.subscribe-input:focus {
  background: #fffdf8;
  border-color: #b8863b;
  box-shadow: 0 0 0 4px rgba(184, 134, 59, 0.12);
}

.subscribe-button {
  height: 56px;
  padding: 0 36px;
  border: none;
  border-radius: 999px;
  background: #1e4a45;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.subscribe-button:hover {
  background: #b8863b;
  box-shadow: 0 8px 25px -10px rgba(184, 134, 59, 0.45);
  transform: translateY(-2px);
}

.subscribe-button:active {
  transform: translateY(0);
}

.subscribe-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
}

.send-icon {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}

.subscribe-button:hover .send-icon {
  transform: rotate(180deg) translateX(-3px);
}

.subscribe-note {
  font-size: 0.85rem;
  color: #8c785f;
  margin-top: 22px;
  font-weight: 500;
}

@media (max-width: 640px) {
  .subscribe-card-wrapper {
    padding: 16px;
    background: transparent;
    border: none;
    box-shadow: none;
  }

  .subscribe-form {
    flex-direction: column;
  }
  
  .subscribe-button {
    width: 100%;
  }
}
</style>