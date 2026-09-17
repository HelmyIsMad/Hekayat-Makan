<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const API = 'http://localhost:3000'

const route = useRoute()
const router = useRouter()

const query = ref(route.query.q || '')
const submittedQuery = ref(route.query.q || '')

const places = ref([])
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    const res = await fetch(`${API}/mainCards`)
    if (!res.ok) throw new Error('تعذر جلب البيانات')
    const data = await res.json()
    places.value = data.map((p) => ({
      id: p.id,
      name: p.title,
      city: p.city,
      era: p.era,
      badge: p.badge,
    }))
  } catch (e) {
    error.value = 'تعذر تحميل نتائج البحث. تأكد من تشغيل خادم البيانات (npm run server).'
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
    <div class="page">
      <h1>البحث</h1>

      <div class="search-row">
        <button type="button" class="search-btn" @click="runSearch">ابحث</button>
        <div class="input-wrap">
          <input
            v-model="query"
            type="text"
            placeholder="ابحث عن مكان أو مدينة أو حقبة..."
            class="search-input"
            @keydown.enter="runSearch"
          />
          <span class="search-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
        </div>
      </div>

      <div v-if="loading" class="hint-box">جاري تحميل البيانات...</div>
      <div v-else-if="error" class="hint-box">{{ error }}</div>

      <div v-else-if="!submittedQuery.trim()" class="hint-box">
        اكتب كلمةً في الأعلى لبدء البحث في معالم مصر.
      </div>

      <div v-else-if="results.length === 0" class="hint-box">
        لا توجد نتائج مطابقة لـ «{{ submittedQuery }}».
      </div>

      <ul v-else class="results-list">
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
  background-color: #f2ede1;
  direction: rtl;
}
.page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 48px 24px;
  text-align: right;
  font-family: 'Markazi Text', 'Amiri', serif;
  color: #3a332b;
}

h1 {
  font-family: 'Katibeh', 'Amiri', serif;
  font-size: 2.75rem;
  font-weight: 400;
  margin-bottom: 32px;
}

.search-row {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

.input-wrap {
  position: relative;
  flex: 1;
}

.search-input {
  width: 100%;
  padding: 14px 44px 14px 16px;
  border-radius: 10px;
  border: 1px solid #e3dac7;
  font-size: 1.05rem;
  background: #fdfbf6;
  color: #3a332b;
  font-family: 'Markazi Text', 'Amiri', serif;
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
  background: #2f6f68;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 0 28px;
  font-size: 1.05rem;
  font-family: 'Markazi Text', 'Amiri', serif;
  cursor: pointer;
  transition: background 0.15s ease;
}
.search-btn:hover {
  background: #275c56;
}

.hint-box {
  border: 1px dashed #d9cfba;
  border-radius: 12px;
  background: #f9f6ee;
  padding: 40px 20px;
  text-align: center;
  color: #a89c86;
  font-size: 1.05rem;
}

.results-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.result-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f2ede1;
  border-radius: 10px;
  padding: 14px 18px;
  text-decoration: none;
  color: #3a332b;
  transition: background 0.15s ease;
}
.result-link:hover {
  background: #e7ddc9;
}
.result-name {
  font-weight: 700;
}
.result-city {
  color: #6b6255;
  font-size: 0.9rem;
}
</style>
