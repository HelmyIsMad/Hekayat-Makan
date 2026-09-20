<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { apiFetch } from '../utils/api.js'

const route = useRoute()
const router = useRouter()

const query = ref(route.query.q || '')
const submittedQuery = ref(route.query.q || '')

const places = ref([])
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    const data = await apiFetch('/mainCards')
    places.value = data.map((p) => ({
      id: p.id,
      name: p.title,
      city: p.city,
      era: p.era,
      badge: p.badge,
    }))
  } catch (e) {
    error.value = 'تعذر تحميل نتائج البحث.'
  } finally {
    loading.value = false
  }
})

const results = computed(() => {
  const q = submittedQuery.value.trim()
  if (!q) return []
  return places.value.filter(
    (p) => p.name.includes(q) || p.city.includes(q) || (p.era && p.era.includes(q))
  )
})

function runSearch() {
  submittedQuery.value = query.value
  router.replace({ path: '/search', query: query.value ? { q: query.value } : {} })
}

watch(
  () => route.query.q,
  (val) => {
    if (val !== undefined) {
      query.value = val
      submittedQuery.value = val
    }
  }
)
</script>

<template>
  <section class="page-wrap">
    <div class="search-card-container">
      <div class="badge-top">استكشاف وتنقيب</div>
      <h1>ابحث في تراث مصر</h1>
      <p class="subtitle">اعثر على مكانك المفضله، المدن الأثرية، أو الحقبة التاريخية التي تستهويك.</p>

      <div class="search-box-wrapper">
        <button type="button" class="search-btn" @click="runSearch">ابدأ البحث</button>
        <div class="input-wrap">
          <input
            v-model="query"
            type="text"
            placeholder="ابحث عن مكان أو مدينة أو حقبة..."
            class="search-input"
            @keydown.enter="runSearch"
          />
          <span class="search-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
        </div>
      </div>
      <p class="footer-note">اكتب اسم المعلم أو المدينة للوصول السريع إلى تفاصيل الحكاية.</p>

      <div v-if="loading" class="hint-box">جاري تحميل البيانات...</div>
      <div v-else-if="error" class="hint-box">{{ error }}</div>

      <div v-else-if="submittedQuery.trim() && results.length === 0" class="hint-box">
        لا توجد نتائج مطابقة لـ «{{ submittedQuery }}».
      </div>

      <ul v-if="submittedQuery.trim() && results.length > 0" class="results-list">
        <li v-for="place in results" :key="place.id">
          <router-link :to="`/explore/${place.id}`" class="result-link">
            <span class="result-name">{{ place.name }}</span>
            <span class="result-city">{{ place.city }} · {{ place.era }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.page-wrap {
  width: 100%;
  background-color: #f4efe6;
  direction: rtl;
  min-height: calc(100vh - 82px);
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.search-card-container {
  max-width: 850px;
  width: 100%;
  background: #fff;
  border-radius: 24px;
  border: 1px solid #e2d8c4;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.04);
  padding: 50px 40px;
  text-align: center;
  font-family: 'Markazi Text', 'Amiri', serif;
}

.badge-top {
  display: inline-block;
  background: rgba(184, 134, 59, 0.15);
  border: 1px solid #b8863b;
  color: #b8863b;
  padding: 4px 18px;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 20px;
}

h1 {
  font-family: 'Aref Ruqaa', 'Amiri', serif;
  font-size: 3rem;
  font-weight: 700;
  color: #1e4a45;
  margin-bottom: 12px;
  line-height: 1.2;
}

.subtitle {
  color: #5b584f;
  font-size: 1.2rem;
  margin-bottom: 36px;
  line-height: 1.6;
}

.search-box-wrapper {
  display: flex;
  gap: 12px;
  background: #fdfbf6;
  border: 1px solid #e2d8c4;
  border-radius: 16px;
  padding: 10px;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.02);
  margin-bottom: 16px;
  align-items: center;
}

.input-wrap {
  position: relative;
  flex: 1;
}

.search-input {
  width: 100%;
  padding: 14px 48px 14px 16px;
  border-radius: 12px;
  border: none;
  font-size: 1.2rem;
  background: transparent;
  color: #241a10;
  font-family: 'Markazi Text', 'Amiri', serif;
  outline: none;
}

.search-input::placeholder {
  color: #a89c86;
}

.search-icon {
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  color: #a89c86;
  pointer-events: none;
}

.search-btn {
  background: #1e4a45;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 14px 36px;
  font-size: 1.2rem;
  font-family: 'Aref Ruqaa', 'Amiri', serif;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  white-space: nowrap;
}

.search-btn:hover {
  background: #143330;
  transform: translateY(-2px);
}

.footer-note {
  color: #8c7a65;
  font-size: 0.95rem;
  margin-bottom: 30px;
}

.hint-box {
  border: 1px dashed #d9cfba;
  border-radius: 14px;
  background: #f9f6ee;
  padding: 30px 20px;
  text-align: center;
  color: #6b573f;
  font-size: 1.15rem;
  margin-top: 20px;
}

.results-list {
  list-style: none;
  margin: 20px 0 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: right;
}

.result-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fdfbf6;
  border: 1px solid #e2d8c4;
  border-radius: 12px;
  padding: 16px 20px;
  text-decoration: none;
  color: #241a10;
  transition: all 0.3s ease;
}

.result-link:hover {
  background: #f9f6ee;
  border-color: #b8863b;
  transform: translateY(-2px);
}

.result-name {
  font-family: 'Aref Ruqaa', 'Amiri', serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: #1e4a45;
}

.result-city {
  color: #6b573f;
  font-size: 1.05rem;
}

@media (max-width: 768px) {
  .search-box-wrapper {
    flex-direction: column;
    background: transparent;
    border: none;
    box-shadow: none;
    padding: 0;
    gap: 12px;
  }
  .input-wrap {
    width: 100%;
    background: #fdfbf6;
    border: 1px solid #e2d8c4;
    border-radius: 12px;
  }
  .search-btn {
    width: 100%;
  }
  .search-card-container {
    padding: 30px 20px;
  }
}
</style>
